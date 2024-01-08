import { PostWidget } from "./post";
import { Meta, StoryObj } from "@storybook/react";

import { HttpResponse, http } from 'msw';

const meta: Meta<typeof PostWidget> = {
    component: PostWidget,
};

export default meta;
type Story = StoryObj<typeof PostWidget>

export const Mocked: Story = {
    parameters: {
        msw: [
            http.get('https://jsonplaceholder.typicode.com/posts/1', () => {
                return HttpResponse.json({
                    title: 'To jest zmokowany tytuł',
                    body: "Magna reprehenderit dolore labore eiusmod pariatur nostrud anim eu Lorem eiusmod dolore."
                })
            })
        ]
    }
}
