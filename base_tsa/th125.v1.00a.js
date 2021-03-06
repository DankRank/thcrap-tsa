{
	"binhacks": {
		"log_restore": {
			"addr": "0x4653c0"
		},
		"spell_align": {
			"addr": "0x45f979"
		},
		"sprintf_call_esp+14": {
			"addr": "Rx5f8dc"
		},
		"sprintf_rep": {
			"addr": "Rx5f903"
		},
		"font_ruby_size": {
			"addr": "0x44cfcb"
		},
		"unpatch_spell_align": {
			"addr": "Rx5f9ff",
			"title": "Unpatch the questionable spell name width addition in the English patch",
			"code": "508b02578bbc24c0000000508bc5e8eefdffff8b8c2494000000838e84040000015f5d5b33cce85aba000081c48c000000c3cccccccc"
		}
	},
	"breakpoints": {
		"file_size": {
			"addr": "0x4630de"
		},
		"file_load": {
			"addr": "0x46311a"
		},
		"file_loaded": {
			"addr": "0x44a2b3"
		},
		"spell_id#menu": {
			"addr": "0x443683"
		},
		"spell_id#ingame": {
			"addr": "0x40e31c"
		},
		"spell_id#replay": {
			"addr": "0x446a0f"
		},
		"spell_name": {
			"addr": "0x40cfc4"
		},
		"spell_name#menu": {
			"addr": "0x4436ab"
		},
		"music_title": {
			"addr": "0x44890e"
		},
		"music_cmt#first": {
			"addr": "0x448ac9"
		},
		"music_cmt#track": {
			"addr": [
				"0x448abc",
				"0x448b81"
			]
		},
		"music_cmt": {
			"addr": "0x448b8e"
		},
		"ruby_offset": {
			"addr": [
				"Rx1c577",
				"Rx1c636"
			]
		}
	},
	"tsa_font_block": {
		"addr": "Rxd0908"
	}
}
