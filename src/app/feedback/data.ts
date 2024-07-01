"use server";

import { PrismaClient } from "@prisma/client";
import { Service } from "@prisma/client";

// Ensure PrismaClient is reused between lambda functions to avoid exhausting database connections
let prisma = new PrismaClient();

export const createReview = async (name: string, stars: number, content: string) => {
    try {
        const response = await prisma.review.create({
            data: {
                name: name,
                starrating: stars,
                content: content,
            },
        });
        const data = JSON.stringify(response);
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

