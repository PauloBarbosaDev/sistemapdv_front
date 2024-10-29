import { LucideMenu } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '../../ui/sheet';
import Link from 'next/link';

export function SheetGeneric() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center justify-center w-12 h-12 bg-primaryColor rounded-full hover:cursor-pointer">
          <LucideMenu className="text-white w-6 h-6" />
        </div>
      </SheetTrigger>
      <SheetContent
        side={'left'}
        className="w-52 sm:w-70 p-0 m-0 bg-darkBlue text-white border-0"
      >
        <SheetHeader className="px-4 py-2">
          <SheetTitle className="text-lg text-white">Menu</SheetTitle>
        </SheetHeader>
        <nav>
          <ul className="mt-3">
            <li className="group relative bg-primaryColor h-11 px-4 py-2 hover:bg-darkBlue border-b border-white/20">
              <Link href="#">Usuários</Link>
              <ul className="absolute left-full top-0 hidden group-hover:block bg-primaryColor shadow-lg">
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#" className="">
                    Listar
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#">Adicionar</Link>
                </li>
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#">Editar</Link>
                </li>
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#">Excluir</Link>
                </li>
              </ul>
            </li>
            <li className="group relative bg-primaryColor h-11 px-4 py-2 hover:bg-darkBlue border-b border-white/20">
              <Link href="#">Clientes</Link>
              <ul className="absolute left-full top-0 hidden group-hover:block bg-primaryColor shadow-lg">
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#" className="">
                    Listar
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#">Adicionar</Link>
                </li>
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#">Editar</Link>
                </li>
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#">Excluir</Link>
                </li>
              </ul>
            </li>
            <li className="group relative bg-primaryColor h-11 px-4 py-2 hover:bg-darkBlue border-b border-white/20">
              <Link href="#">Produtos</Link>
              <ul className="absolute left-full top-0 hidden group-hover:block bg-primaryColor shadow-lg">
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#">Listar</Link>
                </li>
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#">Adicionar</Link>
                </li>
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#">Editar</Link>
                </li>
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#">Excluir</Link>
                </li>
              </ul>
            </li>
            <li className=" group relative bg-primaryColor h-11 px-4 py-2 hover:bg-darkBlue border-b border-white/20">
              <Link href="#">Categorias</Link>
              <ul className="absolute left-full top-0 hidden group-hover:block bg-primaryColor shadow-lg">
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#">Listar</Link>
                </li>
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#">Adicionar</Link>
                </li>
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#">Editar</Link>
                </li>
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#">Excluir</Link>
                </li>
              </ul>
            </li>
            <li className="group relative bg-primaryColor  h-11 px-4 py-2 hover:bg-darkBlue border-b border-white/20">
              <Link href="#">Pedidos</Link>
              <ul className="absolute left-full top-0 hidden group-hover:block bg-primaryColor shadow-lg">
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#">Listar</Link>
                </li>
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#">Adicionar</Link>
                </li>
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#">Editar</Link>
                </li>
                <li className="px-4 py-2 hover:bg-darkBlue border-b border-white/20">
                  <Link href="#">Excluir</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
