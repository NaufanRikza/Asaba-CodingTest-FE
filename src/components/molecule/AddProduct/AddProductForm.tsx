import { VStack } from "@chakra-ui/react";
import FormInput from "./FormInput";
import { useFormik } from "formik";
import { useEffect } from "react";
import { createProductValidation } from "../../../app/validation/createProduct.validation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../../app/redux/store";
import {
  setFormData,
  setIsCreateSubmit,
} from "../../../app/redux/slice/form/fromSlice";
import { IProductCreationAttributes } from "../../../data/interface/product.interface";

export default function AddProductForm() {
  const formik = useFormik({
    initialValues: {
      code: "",
      name: "",
      quantity: 0,
      description: "",
    },
    validationSchema: createProductValidation,
    onSubmit: (value) => {
      const data: IProductCreationAttributes = {
        ...value,
        is_active: true,
        quantity: Number(value.quantity),
      };
      dispatch(setFormData(data));
    },
  });

  const dispatch = useDispatch<AppDispatch>();

  const isCreateSubmit = useSelector(
    (state: AppState) => state.form.isCreateSubmit
  );

  useEffect(() => {
    if (!isCreateSubmit) {
      return;
    }

    formik.handleSubmit();
    dispatch(setIsCreateSubmit(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCreateSubmit]);

  return (
    <VStack w={"full"} spacing={"1rem"} mt={"1rem"} px={"1rem"}>
      <FormInput
        label="Nama produk"
        id="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        error={formik.errors.name}
        submitCount={formik.submitCount}
      />
      <FormInput
        label="Kode Produk"
        id="code"
        onChange={formik.handleChange}
        value={formik.values.code}
        error={formik.errors.code}
        submitCount={formik.submitCount}
      />
      <FormInput
        label="Jumlah"
        id="quantity"
        onChange={formik.handleChange}
        value={String(formik.values.quantity)}
        error={formik.errors.quantity}
        submitCount={formik.submitCount}
      />
      <FormInput
        label="Deskripsi"
        id="description"
        onChange={formik.handleChange}
        value={formik.values.description}
        error={formik.errors.description}
        submitCount={formik.submitCount}
      />
    </VStack>
  );
}
