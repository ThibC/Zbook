# Zbook

An application to easily schedule meetings on zoom.

## Prerequisite

- Docker & docker-compose

## Installation

```bash
git clone https://github.com/ThibC/zbook.git
cd zbook
make install
# Back
cd back
npm i
cp config.json.dist config.json
# ask for a JWT token
# Replace "<ASK FOR JWT TOKEN>" in config.json by the actual JWT token value 
```

## Running the project

```bash 
make daemon # launch project on http://localhost:9090
```

You can go to http://localhost:9090 to test the app.
