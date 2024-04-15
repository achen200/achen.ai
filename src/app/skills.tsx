"use client";


import { Typography } from "@material-tailwind/react";
import { SkillCard } from "@/components";

const SKILLS = [
	{
	title: "Front End",
	children: [{name:"JavaScript", src:"/logos/js.svg"}, 
		{name:"ReactJS", src:"/logos/react.svg"}, 
		{name:"AngularJS", src:"/logos/angular.svg"}],
	},
	{
	title: "Back End",
	children: [{name:"NodeJS", src:"/logos/node.svg"}, 
		{name:"PostgreSQL", src:"/logos/postgresql3.svg"}, 
		{name:"Docker", src:"/logos/docker.svg"}]
	},
	{
	title: "DevOps",
	children:[{name:"Github", src:"/logos/github.svg"}, 
		{name:"Bitbucket", src:"/logos/bitbucket.svg"}, 
		{name:"Linux", src:"/logos/linux.svg"}]
	},
	{
	title: "Machine Learning",
	children:[{name:"Pytorch", src:"/logos/pytorch.svg"}, 
		{name:"Tensorflow", src:"/logos/tensorflow.svg"}, 
		{name:"Python", src:"/logos/python.svg"}]
	},
	{
	title: "Other",
	children:[{name:"C++", src:"/logos/cpp.svg"}, 
		{name:"Java", src:"/logos/java.svg"},
		{name:".NET", src:"/logos/dotnet.svg"},
		{name:"ARM", src:"/logos/assembly.svg"},
		{name:"System Verilog", src:"/logos/systemverilog.svg"},
		{name:"Quartus", src:"/logos/intel.svg"}
		]
	},
];


export function Skills() {
return (
	<section className="py-28 px-8" id="SkillSection">
	<div className="container mx-auto mt-0 text-center">
		<Typography variant="h2" color="blue-gray" className="mb-4">
		Technology
		</Typography>
		<Typography variant="p">
			Languages, Frameworks, and Libraries
		</Typography>
	</div>
	<div className="container mx-auto grid grid-cols-2 gap-y-10	 md:grid-cols-2 lg:grid-cols-2">
		{SKILLS.map((props, idx) => (
		<SkillCard key={idx} {...props} />
		))}
	</div>
	</section>
);
}

export default Skills;
