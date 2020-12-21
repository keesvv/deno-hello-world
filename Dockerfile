# Alpine Linux
FROM alpine:latest

# Copy source files
COPY . /app
WORKDIR /app

# Install make & deno
RUN \
  apk add make curl && \
  curl -fsSL https://deno.land/x/install/install.sh | sh

# Environment vars
ENV DENO_INSTALL="/root/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"

# Compile source files
RUN make

# Run
CMD ["make", "run"]
