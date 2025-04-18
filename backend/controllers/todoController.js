import Todo from '../models/todoModel.js';

export const createTodo = async (req, res) => {
    const { title, description } = req.body;
    try {
        const todo = await Todo.create({ title, description });
        res.json(todo);
    } catch (error) {
        res.json({ error: error.message });
    }
};

export const getTodos = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    try {
        const todos = await Todo.find()
            .sort({ updatedAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit);
        const total = await Todo.countDocuments();
        res.json({ todos, total });
    } catch (error) {
        res.json({ error: error.message });
    }
};

export const getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.json(todo);
    } catch (error) {
        res.json({ error: error.message });
    }
};

export const updateTodo = async (req, res) => {
    const { title, description } = req.body;
    try {
        const updated = await Todo.findByIdAndUpdate(
            req.params.id,
            { title, description },
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        res.json({ error: error.message });
    }
};

export const deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted successfully' });
    } catch (error) {
        res.json({ error: error.message });
    }
};
