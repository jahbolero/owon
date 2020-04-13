export class Request {
  public name: string;
  public contactNumber: string;
  public emailAddress: string;
  public requestQty: Number;
  public addressLine: string;
  public city: string;
  public country: string;
  public zip: Number;

  constructor(
    name?,
    contactNumber?,
    emailAddress?,
    requestQty?,
    addressLine?,
    city?,
    country?,
    zip?
  ) {
    (this.name = name),
      (this.contactNumber = contactNumber),
      (this.emailAddress = emailAddress),
      (this.requestQty = requestQty),
      (this.addressLine = addressLine),
      (this.city = city),
      (this.country = country),
      (this.zip = zip);
  }
}
