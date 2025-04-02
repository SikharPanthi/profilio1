import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Mail, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div>
            <p className="text-gray-300 mb-8">Feel free to reach out for any inquiries.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-primary" size={24} />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href="mailto:psikhar74@gmail.com" className="text-gray-400 hover:text-primary">psikhar74@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-primary" size={24} />
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-gray-400">+977 986739143</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <form action="https://formsubmit.co/psikhar74@gmail.com" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input type="text" name="name" placeholder="Your Name" required />
                <Input type="email" name="email" placeholder="Your Email" required />
              </div>
              <Input type="text" name="subject" placeholder="Subject" required />
              <Textarea name="message" placeholder="Your Message" required />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/80 text-white">
                Send Message <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
