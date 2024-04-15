import { Card, CardBody, Typography } from "@material-tailwind/react";
import {Subskill, ChildProps} from "./subskill";

interface SkillCardProps {
  title: string;
  children: ChildProps[];
}

export function SkillCard({title, children }: SkillCardProps) {
  return (
    <Card color="transparent" shadow={true}>
      <CardBody className="grid justify-center text-center">
        {/* <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div> */}
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
		<Subskill>{children}</Subskill>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
