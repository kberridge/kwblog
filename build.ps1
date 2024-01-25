<#
.Synopsis
	Invoke-Build build script for KWBlog.
  This script supports direct invocation and automatically installs the correct version
  of Invoke-Build if it is missing.
  Run the script, ex: `.\build deploy`
#>

param(
	[Parameter(Position=0)]
	[string[]]$Tasks
)

# Bootstrap invoke-build
if ($MyInvocation.ScriptName -notlike '*Invoke-Build.ps1') {
	$ErrorActionPreference = 1
	$InvokeBuildVersion = '5.10.5'
	try {
		Import-Module InvokeBuild -RequiredVersion $InvokeBuildVersion
	}
	catch {
		Install-Module InvokeBuild -RequiredVersion $InvokeBuildVersion -Scope CurrentUser -Force
		Import-Module InvokeBuild -RequiredVersion $InvokeBuildVersion
	}
	return Invoke-Build $Tasks $MyInvocation.MyCommand.Path @PSBoundParameters
}

task Restore {
  npm i
}

task Build Restore, {
  npm run build
}

task Deploy Build, {
  npx firebase deploy
}

task Dev {
  npm run dev
}

task . Build