import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Todo List</h1>
      {tasks.length === 0 ? (
        <p>No tasks available. Add a new task to get started.</p>
      ) : (
        tasks.map((task) => (
          <Card key={task.id} className="mb-4">
            <CardHeader>
              <CardTitle>{task.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{task.description}</p>
              <div className="flex space-x-2 mt-4">
                <Button onClick={() => navigate(`/edit-task/${task.id}`)}>
                  Edit
                </Button>
                <Button variant="destructive" onClick={() => handleDelete(task.id)}>
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default Index;