{
	"binhacks": {
		"sprintf_call_1": {
			"code": "50e8[strings_vsprintf]894580",
			"title": "Safe sprintf (first call)"
		},
		"sprintf_call_2": {
			"code": "50e8[strings_vsprintf]8945b8",
			"title": "Safe sprintf (second call)"
		},
		"music_title_prepare": {
			"code": "8d8c0fdca301005153518b8e901b0100e861c9fdff598b45ec803c1800742b8d9361ffffff8b45f450688020300068ffe0d000909090909090",
			"title": "Prepare Music Room title parameter fetching"
		},
		"music_cmt_rewrite": {
			"code": "d1e872064883f8077605e9ee01000069f8a4020000c68437029f0100018dbc37049d01008b9e741b010080bbac814a000074196bd04269cb9202000001ca8d8c32b6c900009090909090eb078b0c85bc1d4a0089f85131dbe98701000090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090",
			"title": "Rewrite Music Room comment render calls"
		},
		"inplace_xor_dst": {
			"code": "57",
			"title": "Decrypt XOR'ed strings in-place (destination pointer)"
		},
		"inplace_xor_rep": {
			"code": "89f9 fc 90 90 90",
			"title": "Decrypt XOR'ed strings in-place (referenced pointer)"
		},
		"buffer_overflow_ending_rem" : {
			"code": "837d b0 00 75 03 8945 b0 ff45 fc 40 90909090909090909090",
			"title": "Remove the useless string copy and buffer overflow in ending messages (remember line start)"
		},
		"buffer_overflow_ending_rep" : {
			"code": "8b4d b0",
			"title": "Remove the useless string copy and buffer overflow in ending messages (replace pointer)"
		},
		"menu_desc_align_1": {
			"code": "83c40c 50 e8[GetTextExtent] d1e0 8bb724020000 ff76 3c d94618 8b4d14 909090909090909090",
			"title": "Menu description alignment, #1: Calculate the correct length"
		},
		"menu_desc_align_2": {
			"code": "9090909090909090909090",
			"title": "Menu description alignment, #2: Don't multiply the length by 15"
		}
	},
	"title": "東方花映塚　～ Phantasmagoria of Flower View",
	"url_update": "http://kourindou.exblog.jp/1327589/",
	"url_trial": "http://www16.big.or.jp/~zun/html/th09dl.html",
	"latest": "v1.50a",
	"formats": {
		"msg": "msg09",
		"anm": "anm06"
	},
	"breakpoints": {
		"file_size": {
			"file_size": "eax",
			"file_name": "ecx",
			"cavesize": "5"
		},
		"file_load": {
			"file_buffer": "eax",
			"eip_jump_dist": "0xa5",
			"cavesize": "7"
		},
		"file_loaded": {
			"file_buffer": "esi",
			"cavesize": "5"
		},
		"music_title": {
			"track": "edx",
			"str": "eax",
			"format_id": "Music Room Numbered Title",
			"cavesize": "6"
		},
		"music_cmt": {
			"track": "ebx",
			"line_num": "eax",
			"str": "ecx",
			"cavesize": "5"
		}
	}
}
