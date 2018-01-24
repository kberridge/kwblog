param(
  [Parameter(Position=1)]
  [string]$Command
)

function Build {
  wyam build -o .\docs
}

function Server {
  wyam -p -w -o .\docs
}

if(!$Command) { Build }
elseif ($Command -ieq "build") { Build }
elseif ($Command -ieq "server") { Server }
else { throw "Unknown command: $Command" }