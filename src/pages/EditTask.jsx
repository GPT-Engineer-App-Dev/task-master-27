import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // Fetch the task details using the id and set the state
    // For simplicity, we are using local state in the Index component
    // This should ideally be done via context or a global state
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the task in the list (this should ideally be done via context or a global state)
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Title</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Save Changes</Button>
      </form>
    </div>
  );
};

export default EditTask;