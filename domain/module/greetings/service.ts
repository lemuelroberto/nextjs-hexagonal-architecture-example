type Input = {
    name: string
}

type Output = {
    greetings: string
    executedAt: Date
}

export interface ClockPort {
    now(): Date
}

export function service(clockPort: ClockPort): (req: Input) => Output {
    return (req: Input): Output => {
        return {
            greetings: `Hi, ${req.name}! :)`,
            executedAt: clockPort.now(),
        }
    }
}
