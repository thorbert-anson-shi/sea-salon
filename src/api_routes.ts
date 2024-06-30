"use server";

import { Prisma, PrismaClient } from "@prisma/client";

export const createReview = async (name: string, stars: number, content: string) => {
    const prisma = new PrismaClient();

    const response = await prisma.reviews.create({
        data: {
            name: name,
            starrating: stars,
            content: content,
        },
    });

    console.log(response);
};

export default createReview;