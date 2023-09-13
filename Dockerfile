FROM golang:alpine  as builder

LABEL maintainer "japier.07@gmail.com"

COPY main.go main.go
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /go/bin/api main.go

FROM alpine

COPY --from=builder /go/bin/api /go/bin/api

CMD ["go/bin/api"]
