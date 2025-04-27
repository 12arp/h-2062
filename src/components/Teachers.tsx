
import { GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const teachers = [
  {
    name: "Aditya Kumar",
    role: "Senior English Instructor",
    specialization: "IELTS & Business Communication",
    experience: "8+ years of teaching experience",
    image: "/lovable-uploads/5c4e5c00-9a64-4d47-b4f2-6d095dba5c6a.png"
  },
  {
    name: "Priyanka Singh",
    role: "Language Expert",
    specialization: "Spoken English & Pronunciation",
    experience: "6+ years of teaching experience",
    image: "/lovable-uploads/00aad74e-a93b-4569-8248-2167151f0d73.png"
  }
];

const Teachers = () => {
  return (
    <section id="teachers" className="py-20 bg-gray-50">
      <div className="container-padding mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Expert <span className="text-primary">Teachers</span></h2>
          <p className="section-subtitle">
            Learn from experienced professionals dedicated to your English language journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teachers.map((teacher) => (
            <Card key={teacher.name} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={teacher.image} alt={teacher.name} />
                  <AvatarFallback>
                    <GraduationCap className="h-10 w-10" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {teacher.role}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-gray-600">{teacher.specialization}</p>
                  <p className="text-gray-500 text-sm">{teacher.experience}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
