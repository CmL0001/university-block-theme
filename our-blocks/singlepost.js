wp.blocks.registerBlockType("ourblocktheme/singlepost", {
	title: "University Single Post",
	edit: function() {
		return wp.element.createElement("div", { className: "our-placeholder-block" }, "Single Post Placeholder")
	},
	save: function() {
		return null
	}
})