import sys
import ast
import io

class OutputCollector(io.StringIO):
    def __init__(self):
        super().__init__()
        self.outputs = {}

    def write(self, output):
        # Get the current line number where the print statement was executed
        frame = sys._getframe(1)
        line_number = frame.f_lineno

        # Store the output in the dictionary with the line number as the key
        if line_number not in self.outputs:
            self.outputs[line_number] = output
        else:
            self.outputs[line_number] += output

# Function to execute the code with custom stdout
def execute_code_with_output(code):
    # Create the custom stdout object
    output_collector = OutputCollector()

    try:
        # Save the original stdout and replace it with the custom stream
        original_stdout = sys.stdout
        sys.stdout = output_collector

        # Execute the code
        exec(code)

        # Restore the original stdout
        sys.stdout = original_stdout
    except Exception as e:
        # Print the exception if any
        print(f"Error: {e}")

    return output_collector.outputs

# Example usage:
code_to_execute = """${code}"""

execute_code_with_output(code_to_execute)
