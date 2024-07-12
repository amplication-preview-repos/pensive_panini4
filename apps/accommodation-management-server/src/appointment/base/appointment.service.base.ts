/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Appointment as PrismaAppointment,
  Room as PrismaRoom,
} from "@prisma/client";

export class AppointmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AppointmentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.appointment.count(args);
  }

  async appointments(
    args: Prisma.AppointmentFindManyArgs
  ): Promise<PrismaAppointment[]> {
    return this.prisma.appointment.findMany(args);
  }
  async appointment(
    args: Prisma.AppointmentFindUniqueArgs
  ): Promise<PrismaAppointment | null> {
    return this.prisma.appointment.findUnique(args);
  }
  async createAppointment(
    args: Prisma.AppointmentCreateArgs
  ): Promise<PrismaAppointment> {
    return this.prisma.appointment.create(args);
  }
  async updateAppointment(
    args: Prisma.AppointmentUpdateArgs
  ): Promise<PrismaAppointment> {
    return this.prisma.appointment.update(args);
  }
  async deleteAppointment(
    args: Prisma.AppointmentDeleteArgs
  ): Promise<PrismaAppointment> {
    return this.prisma.appointment.delete(args);
  }

  async getRoom(parentId: string): Promise<PrismaRoom | null> {
    return this.prisma.appointment
      .findUnique({
        where: { id: parentId },
      })
      .room();
  }
}
