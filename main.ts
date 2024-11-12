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

		// https://docs.obsidian.md/Reference/TypeScript+API/Vault/
		this.registerEvent(this.app.vault.on('create', (file) => {
			app.fileManager.processFrontMatter(file, (frontmatter) => {
				const today = moment();
				const targetDate = moment('2024-11-11');
				if (!today.isAfter(targetDate)) {
					console.log('Only setting field after ', targetDate);
					return;
				}
				if (frontmatter['date']) {
					console.log('Date field already exists');
					return;
				}

				console.log('Set date ', today, 'for new file ', file.name);
				frontmatter['date'] = today;
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
