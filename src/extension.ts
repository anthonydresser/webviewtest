'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as sqlops from 'sqlops';

import * as fs from 'fs';

const entry = fs.readFileSync('./entry.html').toString();

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    sqlops.dashboard.registerWebviewProvider('my-tab', e => {
        e.html = entry;
    });
}

// this method is called when your extension is deactivated
export function deactivate() {
}
