import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting, moment } from 'obsidian';

// Remember to rename these classes and interfaces!

interface StraiterSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: StraiterSettings = {
	mySetting: 'default'
}

export default class Straiter extends Plugin {
	settings: StraiterSettings;

	async onload() {
		await this.loadSettings();

		// https://docs.obsidian.md/Reference/TypeScript+API/Vault/on('create')
		this.registerEvent(this.app.vault.on('create', (file) => {
			app.fileManager.processFrontMatter(file, (frontmatter) => {
				var date = moment();
				console.log('Set date for new file', file.name);
				frontmatter['date'] = date;
			});
		}));
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
