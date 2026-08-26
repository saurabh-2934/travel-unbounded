import BookingForm from "@/components/BookingForm";

export default async function BookingPage({ params }) {
  const { id } = await params;

  return (
    <div>
      <BookingForm destinationId={id} />
    </div>
  );
}