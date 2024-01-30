interface SeedData{
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: Eos velit quia assumenda accusamus. Iusto nesciunt quia porro veritatis eaque minus et. Blanditiis harum dolorum incidunt est molestias non.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'En Progreso: Pariatur cumque libero omnis debitis rem ducimus eius. Eveniet veritatis sed quos doloremque quaerat eos dolorum voluptatem. Ea facere est dolore dolorum.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'Finalizada: Et et assumenda minus. Illum magnam est praesentium. Enim tenetur molestiae ex non dolorem autem ut eos.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ]
}