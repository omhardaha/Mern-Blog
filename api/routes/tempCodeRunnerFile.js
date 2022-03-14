
router.get("/:id", async (req, res) => {
	try {
		const getUser = await Post.findById(req.params.id);
		res.status(200).json(getUser);
	} catch (error) {
		res.status(500).json(error);
	}
});