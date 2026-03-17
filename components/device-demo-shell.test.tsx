import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DeviceDemoShell } from "@/components/device-demo-shell";
import { seqtrakDevice } from "@/content/devices/seqtrak/device";

describe("DeviceDemoShell", () => {
  it("switches the selected step when a step card is clicked", async () => {
    const user = userEvent.setup();
    render(<DeviceDemoShell device={seqtrakDevice} />);

    expect(
      screen.getByRole("heading", {
        name: /learn the surface before the workflow/i,
        level: 2,
      }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /step 2 tie the selected track to a row of step keys/i }));

    expect(
      screen.getByRole("heading", {
        name: /tie the selected track to a row of step keys/i,
        level: 2,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/the manual confirms that drum parts are produced/i)).toBeInTheDocument();
  });
});
