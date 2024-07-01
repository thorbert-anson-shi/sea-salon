"use server";

import { PrismaClient } from "@prisma/client";
import { Role } from "@prisma/client";

let prisma = new PrismaClient();

export const createUser = async (name: string, email: string, phoneNo: string, password: string) => {
    try {
        const response = await prisma.user.create({
            data: {
                fullName: name,
                email: email,
                phoneNo: phoneNo,
                password: password,
                role: Role.CUSTOMER
            }
        })

        const data = JSON.stringify(response);

        return data;
    } catch (error) {
        console.error(error);
        return JSON.parse(JSON.stringify(error));
    }
}

export const createSHA256Hash = async (message: string) => {
    const utf8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}