
import { User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Founder = () => {
  return (
    <section id="founder" className="py-20 bg-white">
      <div className="container-padding mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our <span className="text-primary">Founder</span></h2>
          <p className="section-subtitle">
            Meet the visionary behind our institute's success
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardHeader className="flex flex-col items-center text-center">
              <Avatar className="h-32 w-32 mb-4">
                <AvatarImage src="/lovable-uploads/d6e2cde1-278d-4cd2-bba5-b77af5fc6767.png" alt="Founder" />
                <AvatarFallback>
                  <User className="h-16 w-16" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">Prakash Kumar</CardTitle>
                <CardDescription className="text-primary font-medium mt-2">
                  Founder & Director
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 max-w-xl mx-auto">
                With over three decades of experience in education, our founder has been dedicated to transforming lives through quality English language education. His vision and commitment have helped thousands of students achieve their language learning goals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Founder;
