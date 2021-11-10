import { ClockPort } from "@domain/module/greetings/service";

export class ClockDateAdapter implements ClockPort {
    now(): Date {
        return new Date()
    }
}
