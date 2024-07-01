"use server";

import { PrismaClient } from "@prisma/client";
import { Service } from "@prisma/client";

// Ensure PrismaClient is reused between lambda functions to avoid exhausting database connections
let prisma = new PrismaClient();

// const possibleSessions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const possibleSessions = Array.from({ length: 12 }, (_, i) => i + 1);

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

export const getAvailableSessions = async (date: Date, service: Service) => {

    const bookings = await prisma.reservation.findMany({
        where: {
            date: { equals: date },
            service: { equals: service },
        },
    });

    const bookedSessions = bookings.map((booking) => booking.session);

    let result: number[] = possibleSessions.filter((session) => !bookedSessions.includes(session));
    return result;
}

export const makeReservation = async (name: string, phoneNo: string, service: Service, date: Date, session: number) => {
    try {
        const response = await prisma.reservation.create({
            data: {
                name: name,
                phoneNo: phoneNo,
                service: service,
                date: date,
                session: session
            }
        })

        const data = JSON.stringify(response);

        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
}