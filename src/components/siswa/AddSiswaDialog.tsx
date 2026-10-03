"use client";

import {
        DialogContent,
        DialogDescription,
        DialogHeader,
        DialogFooter,
        DialogTitle,
        DialogTrigger,
        Dialog,
} from "../ui/dialog";
import { Button } from "../ui/button";
import FormFields from "../layout/FormFields";
import { Kelas } from "@/types";

export default function AddSiswaDialog({
    open,
    setOpen,
    data,
    handleChange,
    handleAdd,
    dataKelas,
}: {
    open: boolean;
    setOpen: (open: boolean) => void;
    data: any;
    handleChange: (key: string, value: string | number) => void;
    handleAdd: () => void;
    dataKelas: Kelas[];
}) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-blue-500 text-black hover:bg-blue-400 cursor-pointer" variant="outline" >Tambah Siswa</Button>
            </DialogTrigger>
                  <DialogContent
                      className="
                    bg-gradient-to-br from-purple-500 to-pink-500
                    text-white

">

            <DialogHeader>
                <DialogTitle>Tambah Siswa</DialogTitle>
                <DialogDescription>
                   Silahkan masukan data siswa baru.
                </DialogDescription>
            </DialogHeader>
            <FormFields data={data} onChange={handleChange} kelas={dataKelas} />
            <DialogFooter className="flex justify-end gap-3">
            <Button
                variant="outline"
                onClick={() => setOpen(false)}
                className="
                cursor-pointer
                text-white
                font-medium
                bg-white/20
                border border-white/30
                backdrop-blur-md
                px-4 py-2
                rounded-xl
                shadow-lg shadow-black/20
                transition-all duration-300
                hover:bg-red-500/60
                hover:shadow-xl hover:shadow-red-500/30
                hover:scale-105
                active:scale-95
                "
            >
                Batal
            </Button>

            <Button
                variant="outline"
                onClick={handleAdd}
                className="
                cursor-pointer
                text-white
                font-medium
                bg-white/20
                border border-white/30
                backdrop-blur-md
                px-4 py-2
                rounded-xl
                shadow-lg shadow-black/20
                transition-all duration-300
                hover:bg-green-500/60
                hover:shadow-xl hover:shadow-green-500/30
                hover:scale-105
                active:scale-95
                "
            >
                Tambah
            </Button>
            </DialogFooter>
        </DialogContent>
        </Dialog>
  
    )
}

