import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditForm from "../components/EditForm";
import { productContext } from "../context/MyProvider";

const EditPage = () => {
  const { toEdit, getToEdit } = useContext(productContext);
  const params = useParams();

  useEffect(() => {
    getToEdit(params.id);
  }, []);
  if (!toEdit) {
    return <h2>Loading...</h2>;
  }
  return <EditForm toEdit={toEdit} />;
};

export default EditPage;
