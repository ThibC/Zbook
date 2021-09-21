# Zbook

An application to easily schedule meetings on zoom.

## Prerequisite

- Node: 15.4.0

## Installation

```bash
git clone https://github.com/ThibC/zbook.git
cd zbook
# Front 
cd front
npm i 
# Back
cd ../back
npm i
cp config.json.dist config.json
# ask for a JWT token
# Replace "<ASK FOR JWT TOKEN>" in config.json by the actual JWT token value 
```

## Running the project

```bash 
# in back folder
npm start # start the express server on localhost:4040
# in front folder
npm start # start the webpack server on http://localhost:8080
```

You can go to http://localhost:8080 to test the app.
