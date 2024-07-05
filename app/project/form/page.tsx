import { Card, CardContent, CardFooter, CardHeader } from '@/packages/card';

export default function FormPage() {
  return (
    <section>
      <Card className="w-[350px]">
        <CardHeader>
          <CardHeader.Title>Card Title</CardHeader.Title>
          <CardHeader.Description>Card Description</CardHeader.Description>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </section>
  );
}
