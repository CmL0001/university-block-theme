wp.blocks.registerBlockType("ourblocktheme/singleprofessor", {
	title: "University Single Professor",
	edit: function() {
		return wp.element.createElement("div", { className: "our-placeholder-block" }, "Single Professor Placeholder")
	},
	save: function() {
		return null
	}
})