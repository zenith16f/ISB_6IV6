import prisma from "./prisma";

export const fetchUsers = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    const users = await prisma.user.findMany({
      where: { OR: [{ name: { contains: q } }, { email: { contains: q } }] },
    });
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener usuarios");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
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
