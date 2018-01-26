param(
  [Parameter(Position=1)]
  [string]$Command
)

function Build {
  wyam build
}

function Server {
  wyam -p -w
}

if(!$Command) { Build }
elseif ($Command -ieq "build") { Build }
elseif ($Command -ieq "server") { Server }
else { throw "Unknown command: $Command" }