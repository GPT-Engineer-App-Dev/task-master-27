import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
    };
    // Add the new task to the list (this should ideally be done via context or a global state)
    // For simplicity, we are using local state in the Index component
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Add New Task</h1>
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
        <Button type="submit">Add Task</Button>
      </form>
    </div>
  );
};

export default AddTask;