import "./SinglePost.css";

export default function SinglePost() {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					src="https://images.unsplash.com/photo-1646081499142-3c2945cafdc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					alt=""
					className="singlePostImage"
				/>

				<h1 className="singlePostTitle">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
					deleniti.
					<div className="singlePostEdit">
						<i className="singlePostEditIcon fa-solid fa-pen-to-square"></i>
						<i className="singlePostEditIcon fa-solid fa-trash"></i>
					</div>
				</h1>

				<div className="singlePostInfo">
					<span className="singlePostauthorName">
						Author : <b>OM Hardaha</b>
					</span>
					<span className="singlePostDate">1 hour ago</span>
				</div>
				<p className="singlePostParagraph">
					NI TestStand 2020 Overview NI TestStand 2020 is a handy test
					management application which allows you to develop, debug, and deploy
					robust automated test and validation systems. It is a powerful
					application which enables you to develop test sequences that integrate
					code modules written in any test programming language. It also allows
					you to automate a sequence of steps which can be individual tests,
					measurements, actions, or commands. It is an ideal tool for a variety
					of automated test applications within telecommunications, consumer
					electronics, automotive, aerospace/defense and other industries. The
					program comes integrated with LabVIEW projects allowing engineers and
					developers to create more modular test architectures.With this amazing
					tool, users can more efficiently collaborate on sequence development
					without spending time performing manual error checking. You can also
					download NI TestStand 2020 Features Below are some noticeable features
					which you will experience after NI TestStand 2020 Free Download Allows
					you to develop, debug, and deploy robust automated test and validation
					systems. Enables you to develop test sequences that integrate code
					modules written in any test programming language. Allows you to
					automate a sequence of steps which can be individual tests,
					measurements, actions, or commands. Ideal tool within
					telecommunications, consumer electronics, automotive,
					aerospace/defense and other industries. Comes integrated with LabVIEW
					projects allowing engineers and developers to create more modular test
					architectures. Efficiently collaborate on sequence development without
					spending time performing manual error checking. Enables engineers and
					scientists to design, prototype and deploy systems for measurement,
					automation and embedded applications. Provides a wide range of
					plug-ins for reporting, database logging, and connectivity to other
					systems, meeting the needs of any environment. Intelligently checks
					the code against standard rules to ensure error-free code. Includes
					numerous rules for common errors and allows engineers to create their
					own custom rules within the analyzer utility.
				</p>
			</div>
		</div>
	);
}
