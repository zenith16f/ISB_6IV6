export default function Home() {
  return (
    <main>
      <p>
        Proyecto simple, falta mucho por hacer. Actualmente solo se ha hecho un
        CRUD de usuarios y busquedas por nombre. Se hara un CRUD de productos y
        login y demas con un middleware de autenticacion. Tambien se
        implementara paginacion en la tabla de usuarios y productos.
      </p>

      <p>
        Hay una falla con las busquedas de usaurios y la paginacion por lo que
        estaran desabilidata hasta nuevo aviso.
      </p>

      <p>El proyecto esta hecho con Next.js, TailwindCSS, Prisma, MySQL y fé</p>

      <button>
        <a href="/dashboard">Ir a la Pagina Inicial</a>
      </button>
    </main>
  );
}
