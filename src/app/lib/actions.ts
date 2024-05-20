"use server"

import { z } from 'zod';

//Form validation schema
const FormSchema = z.object({
    title: z.string().max(30),
    body: z.string().min(10),
});


async function createNote(formData: FormData){
    const rawFormData = Object.fromEntries(formData.entries());
    console.log('Creating Note');
    const validatedData = FormSchema.parse(rawFormData);
    console.log('Validated Data:', validatedData);
}

 async function updateNote(noteId:string, formData: FormData){
    const rawFormData = Object.fromEntries(formData.entries());
    console.log('Updating Note');
    const validatedData = FormSchema.parse(rawFormData);
    console.log('Validated Data:', {validatedData, noteId});
}

async function deleteNote(noteId:string){
    console.log('Deleting Note:', noteId);
}

export { createNote, updateNote, deleteNote };