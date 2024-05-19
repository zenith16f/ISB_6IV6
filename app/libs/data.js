import prisma from "./prisma";

export const fetchUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener usuarios");
  }
};

export const fetchUser = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener usuario");
  }
};
