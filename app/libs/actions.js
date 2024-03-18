"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "./prisma";

export const addUser = async (formData) => {
  const { name, email, password, phone } = Object.fromEntries(formData);

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
        phone,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error al agregar usuario");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, name, email, phone, password } = Object.fromEntries(formData);
  console.log(id, name, email, phone, password);
  try {
    const updateFields = {
      name,
      email,
      phone,
      password,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    console.log(updateFields);

    const updatedUser = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...updateFields,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error al actualizar usuario");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error al eliminar usuario");
  }

  revalidatePath("/dashboard/users");
};
