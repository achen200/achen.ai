import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface SubskillProps{
	children:ChildProps[];
}

export interface ChildProps{
	icon?:IconDefinition;
	name:string;
	src?:string;
}

export function Subskill({children}:SubskillProps){
	return children?(
		<div className="grid mx-auto gap-x-5 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{
				children.map(({icon, name, src}:ChildProps, idx)=>{
					return <div className="flex-col text-center" key={idx}>
						{icon?<FontAwesomeIcon className="text-[4em]" icon={icon} />
						:<img src={src} className="mx-auto w-[4em] h-[4em]"/>
						}
						<Typography className="max-w-[11ch]" style={{ wordWrap: "break-word" }}>{name}</Typography>
						
					</div>;	
				})
			}
		</div>
	):"";
}
