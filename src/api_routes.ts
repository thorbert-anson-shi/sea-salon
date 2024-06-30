"use server";

import { PrismaClient } from "@prisma/client";

// Ensure PrismaClient is reused between lambda functions to avoid exhausting database connections
let prisma: PrismaClient;

export const createReview = async (name: string, stars: number, content: string) => {
    try {
        const response = await prisma.reviews.create({
            data: {
                name: name,
                starrating: stars,
                content: content,
            },
        });

        console.log(response);
        return response;
    } catch (error) {
        console.error("Failed to create review:", error);
        throw new Error("Failed to create review");
    }
};

export default createReview;