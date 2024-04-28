import { ObjectId } from "bson";
import mongoose, { Schema } from "mongoose";
/*
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  age: Number,
  Complement: String,
});

const User = model("user", userSchema);

export default User;
*/

export default class ServiceNoteModel {
  private service_note_schema: Schema;

  constructor() {
    this.service_note_schema = new Schema({
      _id: ObjectId,
      description: String,
      created_at: Date,
      changed_at: Date,
      sponsored: Boolean,
      open_by: {
        user_id: ObjectId,
        user_name: String,
        surname: String,
        job_title: String,
        department: [String],
      },
      vehicle: {
        vehicle_id: ObjectId,
        complement_description: String,
        brand: String,
        manufacturer: String,
        license_plate: String,
        chassis: String,
        owner: String,
        mileage_km: Number,
        model: {
          year_manufactured: Number,
          model_year: String,
        },
      },
      work_center: {
        local_name: String,
        location: String,
        department: [String],
      },

      customer: {
        name: String,
        surname: String,
        social_name: String,
        primary_document_id: { value: String, type: String },
        secondary_document_id: { value: String, type: String },
        drivers_license: String,
        email: String,
        Address: [String],
      },

      equipment: {
        equip_id: ObjectId,
        complement_description: String,
        equipment_number: String,
        serial_number: Number,
        part_number: String,
        cost_center: String,
        company_code: String,
      },
    });
  }
}
