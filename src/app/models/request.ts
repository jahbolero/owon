export class MaskRequest {
  public _id: string;
  public name: string;
  public contactNumber: string;
  public emailAddress: string;
  public requestQty: Number;
  public addressLine: string;
  public city: string;
  public country: string;
  public zip: Number;
  public submitted: Date;
  public deleted: Number;

  constructor(
    name?,
    contactNumber?,
    emailAddress?,
    requestQty?,
    addressLine?,
    city?,
    country?,
    zip?,
    submitted?,
    deleted?
  ) {
    (this.name = name),
      (this.contactNumber = contactNumber),
      (this.emailAddress = emailAddress),
      (this.requestQty = requestQty),
      (this.addressLine = addressLine),
      (this.city = city),
      (this.country = country),
      (this.zip = zip),
      (this.submitted = submitted),
      (this.deleted = deleted);
  }
}
