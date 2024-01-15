import * as Yup from "yup";

export const createProductValidation = Yup.object({
  code: Yup.string()
    .required("Kode wajib diisi")
    .max(10, "kode maksimal 10 karakter"),
  name: Yup.string()
    .required("name wajib diisi")
    .max(20, "Name maksimal 20 karakter"),
  quantity: Yup.string()
    .required("Jumlah wajib diisi")
    .test({
      name: "test",
      test: (value) => Number(value) > 0,
      message: "jumlah harus lebih dari 0",
    }),
  description: Yup.string().optional(),
});
