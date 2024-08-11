// src/components/TaskForm.tsx
import { Form, Input, Button, Select } from 'antd';

export interface Task {
  id: number;
  title: string;
  description: string;
  group: number;
  persona: string;
}

interface TaskFormProps {
  onSubmit: (values: Omit<Task, 'id'>) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  return (
    <Form onFinish={onSubmit}>
      <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please enter the task title' }]}>
        <Input />
      </Form.Item>
      
      <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter the task description' }]}>
        <Input.TextArea />
      </Form.Item>
      
      <Form.Item name="group" label="Group" rules={[{ required: true, message: 'Please enter the group number' }]}>
        <Input type="number" />
      </Form.Item>
      
      <Form.Item name="persona" label="Persona" rules={[{ required: true, message: 'Please enter the persona' }]}>
        <Input />
      </Form.Item>
      
      <Button type="primary" htmlType="submit">Submit</Button>
    </Form>
  );
};

export default TaskForm;
