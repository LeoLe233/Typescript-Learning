import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const class1 = await prisma.class.create({
       data: {
            classroom : 123,
            className : "Intro to Java",
            difficulty : "EZ",
            teacher : "Mr. L",
        } 
    });

    const student1 = await prisma.student.create({
        data: {
            first_name: "Jane",
            last_name: "Doe",
            preferred_name: "J.D.",
            email: "jd@example.com",
            age: 16,
            classes: {
                connect: [{className: class1.className}]
            }  
        } 
    });
}

main()
    .catch((error) => {
        throw new Error(error);
        process.exit();
    })
    .finally(async () =>{
        await prisma.$disconnect();
    });
